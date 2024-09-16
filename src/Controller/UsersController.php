<?php

namespace App\Controller;

use App\Entity\Possession;
use App\Entity\Users;
use App\Repository\UsersRepository;
use App\Repository\PossessionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
#[Route('/api/users')]
class UsersController extends AbstractController
{

    public function __construct(private UsersRepository $repo,private PossessionRepository $possessionRepository, private EntityManagerInterface $em) {}

    #[Route(methods: 'GET')]
    public function all(SerializerInterface $serializer): JsonResponse
    {
        $users = $this->repo->findAll();
    
        $data = $serializer->serialize($users, 'json', ['groups' => 'user']);
    
        return new JsonResponse($data, 200, [], true);
    }

    #[Route('/{id}', methods: 'GET')]
    public function getById(Users $user): JsonResponse
    {
        dump($user);
        // Utilisez le convertisseur JSON pour renvoyer l'utilisateur au format JSON
        $data = $this->json($user, 200, [], ['groups' => 'user']);
        dump($data);
        return $data;
    }
#[Route('/{id}', methods: 'DELETE')]
    public function delete(Users $user): JsonResponse
    {
        try {
            // Supprime l'utilisateur de la base de données
            $this->em->remove($user);
            $this->em->flush();

            // Retourne une réponse JSON avec le code HTTP 204 No Content
            return $this->json(null, 204);
        } catch (\Exception $e) {
            // En cas d'erreur, retourne une réponse JSON avec le code HTTP 500 Internal Server Error
            return $this->json('Internal Server Error', 500);
        }
    }
#[Route('/{id}/possession', methods: 'GET')]
    public function getUserPossession(Users $user): JsonResponse
    {
        // Récupérer les possessions de l'utilisateur
        $possessions = $user->getPossessions();

        // Convertir les possessions en tableau associatif
        $possessionsData = [];
        foreach ($possessions as $possession) {
            $possessionsData[] = [
                'id' => $possession->getId(),
                'name' => $possession->getName(),
                'value' => $possession->getValue(),
                'type' => $possession->getType(),
                // Ajoutez d'autres propriétés si nécessaire
            ];
        }


        // Retourner la réponse JSON avec les données des possessions de l'utilisateur
        return $this->json($possessionsData);
    }
    

    // #[Route(methods: 'POST')]
    // public function addUserWithPossession(Request $request, SerializerInterface $serializer): JsonResponse
    // {
    //     try {
    //         $requestData = json_decode($request->getContent(), true);

    //         $user = new Users();
    //         $user->setName($requestData['name'] ?? null);
    //         $user->setfirstname($requestData['firstname'] ?? null);
    //         $user->setEmail($requestData['email'] ?? null);
    //         $user->setAddress($requestData['address'] ?? null);
    //         $user->setTel($requestData['tel'] ?? null);

    //         // Créer une nouvelle entité Possession
    //         $possession = new Possession();
    //         // Utiliser des valeurs par défaut si les champs de possession sont vides ou nuls
    //         $possession->setName($this->validateString($requestData['possession']['name'] ?? ''));
    //         $possession->setValue($this->validateFloat($requestData['possession']['value'] ?? 0.0));
    //         $possession->setType($this->validateString($requestData['possession']['type'] ?? ''));

    //         // Ajouter la possession à l'utilisateur
    //         $user->addPossession($possession);

    //         // Persiste l'utilisateur dans la base de données
    //         $this->em->persist($user);
    //         $this->em->flush();

    //         return $this->json($user, 201);
    //     } catch (\Exception $e) {
    //         return $this->json(['error' => $e->getMessage()], 400);
    //     }
    // }
    public function validateString(string $value): string
{
    if (!is_string($value) || $value === '') {
        return '';
    }

    return $value;
}

private function validateFloat($value): float
    {
        if (!is_float($value) || $value === '') {
            throw new \InvalidArgumentException('Invalid or missing float value');
        }

        return $value;
}
}
// #[Route('/users')]
// class UsersController extends AbstractController
// {

//     public function __construct(private UsersRepository $repo,private PossessionRepository $possessionRepository, private EntityManagerInterface $em) {}

//     public function all(Request $request, SerializerInterface $serializer)
//     {
//         if($request->isMethod('POST')) {
//             $users = $this->repo->findAll();
//             $data = $serializer->serialize($users, 'json', ['groups' => 'user']);
//             return new JsonResponse($data, 200, [], true);
//         } elseif ($request->isMethod('DELETE')) {
//             $userId = $request->get('id');

//             if ($userId) {
//                 $user = $this->repo->find($userId);

//                 if ($user) {
//                     $this->em->remove($user);
//                     $this->em->flush();

//                     return new JsonResponse(['message' => 'User deleted successfully'], 200);
//                 }}
// }
//         return $this->render('users/index.html.twig', [
//             'controller_name' => 'IndexController',
//         ]);
//     }
// }