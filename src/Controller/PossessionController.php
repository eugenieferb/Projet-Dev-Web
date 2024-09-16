<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Possession;
use App\Entity\Users;
use App\Repository\PossessionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;


#[Route('/api/possession')]
class PossessionController extends AbstractController
{
    public function __construct(private PossessionRepository $porepo, private EntityManagerInterface $em) {}
    #[Route(methods: 'GET')]
    public function getAll(Request $request): JsonResponse
    {
        $page = $request->query->get('page', 1);
        $pageSize = $request->query->get('pageSize', 5);

        $possessions = $this->porepo->findBy([], limit: $pageSize, offset: ($page - 1) * $pageSize);

        $possessionsData = [];
        foreach ($possessions as $possession) {
            $possessionsData[] = [
                'id' => $possession->getId(),
                'name' => $possession->getName(),
                'value' => $possession->getValue(),
                'type' => $possession->getType(),
            ];
        }
        return $this->json($possessionsData);
    }

    #[Route(methods: 'POST')]
    public function add(Request $request, SerializerInterface $serializer): JsonResponse
    {
        try {
            // Désérialiser la demande JSON en un tableau associatif
            $requestData = json_decode($request->getContent(), true);
    
            $possession = new Possession();
    
            // Vérifier si le champ "nom" est défini dans la demande JSON
            if (isset($requestData['name'])) {
                $possession->setName($requestData['name']);
            } 
            $possession->setValue($requestData['value'] ?? null);
            $possession->setType($requestData['type'] ?? null);
    
            $this->em->persist($possession);
            $this->em->flush();
    
            // Retourne la réponse JSON avec l'objet possession créé et le code HTTP 201 Created
            return $this->json($possession, 201);
        } catch (\Exception $e) {
            return $this->json('Invalid Body', 400);
        }
    }

    #[Route('/{id}', methods: 'GET')]
    public function getOnePossession(Possession $possession): JsonResponse
    {
        $possessionData = [
            'id' => $possession->getId(),
            'name' => $possession->getName(),
            'value' => $possession->getValue(),
            'type' => $possession->getType(),
        ];

        return $this->json($possessionData);
    }

    #[Route('/{id}', methods: 'DELETE')]
    public function deletePossession(Possession $possession): JsonResponse
    {
        $this->em->remove($possession);
        $this->em->flush();

        return $this->json(null, 204);
    }
    #[Route('/{id}', methods: 'PATCH')]
    public function updatePossession(Possession $possession, Request $request, SerializerInterface $serializer): JsonResponse
    {
        try {
            $requestData = json_decode($request->getContent(), true);

            $possession->setName($requestData['name'] ?? $possession->getName());
            $possession->setValue($requestData['value'] ?? $possession->getValue());
            $possession->setType($requestData['type'] ?? $possession->getType());

            $this->em->flush();

            return $this->json($possession);
        } catch (\Exception $e) {
           
            return $this->json('Invalid Body', 400);
        }
    }

   

}
