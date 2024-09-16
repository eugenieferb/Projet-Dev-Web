<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UsersRepository::class)]
    class Users
    {
        #[ORM\Id]
        #[ORM\GeneratedValue]
        #[ORM\Column]
        #[Groups(['user'])]
        private ?int $id = null;
        
        #[ORM\Column(length: 255, nullable: true)]
        #[Groups(['user'])]
        private ?string $name = null;

        #[ORM\Column(length: 255, nullable: true)]
        #[Groups(['user'])]
        private ?string $firstname = null;

        #[ORM\Column(length: 255, nullable: true)]
        #[Groups(['user'])]
        private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['user'])]
    private ?string $address = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['user'])]
    private ?string $tel = null;

    #[ORM\OneToMany(mappedBy: 'users', targetEntity: Possession::class)]
    #[Groups(['user'])]
    private Collection $possessions;

    public function __construct()
    {
        $this->possessions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): static
    {
        $this->address = $address;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(?string $tel): static
    {
        $this->tel = $tel;

        return $this;
    }

    public function toArray() {
        return array(
            'name' => $this->getName(),
            'firstname' => $this->getFirstname(),
            'email' => $this->getEmail(),
            'address' => $this->getAddress(),
            'tel' => $this->getTel()
        );
    }

    /**
     * @return Collection<int, Possession>
     */
    public function getPossessions(): Collection
    {
        return $this->possessions;
    }

    public function addPossession(Possession $possession): static
    {
        if (!$this->possessions->contains($possession)) {
            $this->possessions->add($possession);
            $possession->setUsers($this);
        }

        return $this;
    }

    public function removePossession(Possession $possession): static
    {
        if ($this->possessions->removeElement($possession)) {
            // set the owning side to null (unless already changed)
            if ($possession->getUsers() === $this) {
                $possession->setUsers(null);
            }
        }

        return $this;
    }
}
