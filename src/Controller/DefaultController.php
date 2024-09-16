<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Users;

class DefaultController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'app_home',requirements:["reactRouting"=>"^(?!api).+"], defaults:["reactRouting"=> null])]
    public function index(): Response
    {
        return $this->render('users/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
    #[Route('/api/add', name: 'app_users_add', methods: ['POST'])]
    public function add(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {
        $data = $request->getContent();
        $newUser = $serializer->deserialize($data, Users::class, 'json');
        
        $entityManager->persist($newUser);
        $entityManager->flush();
        dump($newUser);
        return new Response();
        
    }
}


