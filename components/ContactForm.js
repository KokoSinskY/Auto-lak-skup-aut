import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    city: "",
    email: "",
    phoneNumber: "",
    brand: "",
    model: "",
    engine: "",
    fuel: "",
    price: "",
    // photo: "",
  });

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (
      inputs.city &&
      inputs.email &&
      inputs.phoneNumber &&
      inputs.brand &&
      inputs.model &&
      inputs.engine &&
      inputs.fuel &&
      inputs.price
    ) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          city: "",
          email: "",
          phoneNumber: "",
          brand: "",
          model: "",
          engine: "",
          fuel: "",
          price: "",
          // photo: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Coś poszło nie tak, spróbuj ponownie.",
        });
      }
    }
  };

  const textFieldsData = [
    { id: "city", label: "Miejscowość", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "phoneNumber", label: "Telefon", type: "number" },
    { id: "brand", label: "Marka", type: "text" },
    { id: "model", label: "Model", type: "text" },
    { id: "engine", label: "Pojemność silnika", type: "text" },
    { id: "fuel", label: "Typ Paliwa", type: "text" },
    { id: "price", label: "Proponowana cena", type: "number" },
  ];

  return (
    <Card
      sx={{
        borderRadius: "40px",
      }}
    >
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 3,
            fontWeight: "400",
          }}
        >
          Wypełnij formularz kontaktowy a my się odezwiemy do Ciebie.
        </Typography>
        <form onSubmit={(e) => onSubmitForm(e)}>
          {textFieldsData.map((field) => (
            <TextField
              key={field.id}
              fullWidth
              margin="normal"
              id={field.id}
              type={field.type}
              value={inputs[field.id]}
              onChange={handleChange}
              label={field.label}
              required
              sx={{ borderRadius: "50px" }}
            />
          ))}

          {/* <input id="photo" type="file" onChange={handleChange} /> */}
          <Button variant="outlined" type="submit" sx={{ mt: 2, mb: 3 }}>
            Prześlij
          </Button>
          {form.state === "loading" ? (
            <div>Wysyłanie....</div>
          ) : form.state === "error" ? (
            <div>{form.message}</div>
          ) : (
            form.state === "success" && <div>Wiadomość została wysłana.</div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
