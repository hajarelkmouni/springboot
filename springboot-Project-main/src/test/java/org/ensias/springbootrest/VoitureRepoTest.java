package org.ensias.springbootrest;
import static org.assertj.core.api.Assertions.assertThat;
import org.ensias.springbootrest.modele.Voiture;
import org.ensias.springbootrest.modele.VoitureRepo;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
@RunWith(SpringRunner.class)
@DataJpaTest
public class VoitureRepoTest {
    @Autowired
    private TestEntityManager entityManager;
    @Autowired
    VoitureRepo voitureRepo;

    @Test
    public void ajouterVoiture() {
        Voiture voiture = new Voiture("MiolaCar","Uber","Blanche","M-2020", 2021, 180000);
        entityManager.persistAndFlush(voiture);
        assertThat(voiture.getId()).isNotNull();
    }
    @Test
    public void supprimerVoiture() {
        entityManager.persistAndFlush(new Voiture ("MiolaCar","Uber","Blanche","M-2020", 2021,180000));
        entityManager.persistAndFlush(new Voiture ("MiniCooper","Uber","Rouge","C-2020", 2021,180000));
        voitureRepo.deleteAll();
        assertThat(voitureRepo.findAll()).isEmpty();
    }
}
