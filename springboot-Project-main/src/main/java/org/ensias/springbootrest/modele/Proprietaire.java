package org.ensias.springbootrest.modele;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Proprietaire {
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "proprietaire")
    @JsonIgnore
    private List<Voiture> voitures;
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @NonNull
    private String nom;
    @NonNull
    private String prenom;

    public Proprietaire(String nom, String prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
}

