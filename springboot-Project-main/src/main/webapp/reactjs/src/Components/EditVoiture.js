import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import MyToast from "./myToast";

export default class EditVoiture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      marque: "",
      modele: "",
      couleur: "",
      immatricule: "",
      prix: "",
      annee: "",
      show: false,
    };
  }

  componentDidMount() {
    // Fetch car data for editing based on the ID and update state (you need to implement this)
  }

  submitEditVoiture = (event) => {
    event.preventDefault();
    const voiture = {
      id: this.state.id,
      marque: this.state.marque,
      modele: this.state.modele,
      couleur: this.state.couleur,
      immatricule: this.state.immatricule,
      annee: this.state.annee,
      prix: this.state.prix,
    };

    // Send an HTTP request to update the car data (you need to implement this)
    // Example: axios.put(`http://localhost:8080/voitures/${this.state.id}`, voiture).then((response) => {
    //   // Handle the response
    // });
  };

  voitureChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            children={{
              show: this.state.show,
              message: "Voiture modifiée avec succès",
              type: "success",
            }}
          />
        </div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={faSave} /> Modifier Voiture
          </Card.Header>
          <Form onSubmit={this.submitEditVoiture} id="EditVoitureFormId">
            <Card.Body as={Row}>
              <Form.Group as={Col} controlId="formGridMarque">
                <Form.Label>Marque</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="marque"
                  value={this.state.marque}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Marque Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridModele">
                <Form.Label>Modèle</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="modele"
                  value={this.state.modele}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Modèle de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCouleur">
                <Form.Label>Couleur</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="couleur"
                  value={this.state.couleur}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Couleur de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridImmatricule">
                <Form.Label>Immatricule</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="immatricule"
                  value={this.state.immatricule}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Immatricule de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPrix">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="prix"
                  value={this.state.prix}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Prix de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAnnee">
                <Form.Label>Annee</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="annee"
                  value={this.state.annee}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Immatricule de Voiture"
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} /> Enregistrer
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Réinitialiser
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
