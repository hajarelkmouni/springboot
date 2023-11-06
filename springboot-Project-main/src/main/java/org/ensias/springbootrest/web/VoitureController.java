package org.ensias.springbootrest.web;

import org.ensias.springbootrest.modele.Voiture;
import org.ensias.springbootrest.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class VoitureController {
    @Autowired
    private VoitureRepo voitureRepo;

    @RequestMapping("/voitures")
    public Iterable<Voiture> getVoitures(){
        return voitureRepo.findAll();
    }

    @DeleteMapping("/voitures/{id}")
    public ResponseEntity<String> deleteVoiture(@PathVariable Long id) {
        // Implement the logic to delete the voiture by ID from your repository
        try {
            voitureRepo.deleteById(id);
            return new ResponseEntity<>("Voiture supprimée avec succès.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur lors de la suppression de la voiture.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/voitures")
    public ResponseEntity<String> addVoiture(@RequestBody Voiture voiture) {
        try {
            Voiture newVoiture = voitureRepo.save(voiture);
            return new ResponseEntity<>("Voiture ajoutée avec succès. ID: " + newVoiture.getId(), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur lors de l'ajout de la voiture.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/voitures/{id}")
    public ResponseEntity<Voiture> getVoitureById(@PathVariable Long id) {
        // Implement the logic to retrieve the voiture by ID from your repository
        Voiture voiture = voitureRepo.findById(id).orElse(null);
        if (voiture != null) {
            return new ResponseEntity<>(voiture, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}


