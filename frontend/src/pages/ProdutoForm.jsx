import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import IMaskInputWrapper from "../components/IMaskInputWrapper";

const ProdutoForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados do produto:", data);
  };

  return (
    <Box
      className="ProdutoForm-Container"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ backgroundColor: "#ed8f24", padding: 2, borderRadius: 1, mt: 2 }}
    >
      <Toolbar
        sx={{
          backgroundColor: "#ed8f24",
          padding: 1,
          borderRadius: 2,
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="#804b0f">
          Dados Produto
        </Typography>
      </Toolbar>

      <Box
        sx={{ backgroundColor: "white", padding: 2, borderRadius: 3, mb: 2 }}
      >
        {/* Nome */}
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          {...register("nome", { required: "Nome é obrigatório" })}
          error={!!errors.nome}
          helperText={errors.nome?.message}
          inputProps={{
            maxLength: 100,
          }}
        />

        {/* Descrição */}
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          {...register("descricao", { required: "Descrição é obrigatória" })}
          error={!!errors.descricao}
          helperText={errors.descricao?.message}
          inputProps={{
            maxLength: 200,
          }}
        />

        {/* Valor Unitário com máscara */}
        <Controller
          name="valor_unitario"
          control={control}
          defaultValue=""
          rules={{ required: "Valor unitário é obrigatório" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Valor Unitário"
              fullWidth
              margin="normal"
              error={!!errors.valor_unitario}
              helperText={errors.valor_unitario?.message}
              InputProps={{
                inputComponent: IMaskInputWrapper,
                inputProps: {
                  mask: "R$ num",
                  blocks: {
                    num: {
                      mask: Number,
                      scale: 2,
                      thousandsSeparator: ".",
                      radix: ",",
                      padFractionalZeros: true,
                      normalizeZeros: true,
                    },
                  },
                  lazy: false,
                  unmask: true,
                },
              }}
            />
          )}
        />

        {/* Imagem do produto */}
        <Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Imagem do Produto
          </Typography>
          <Button variant="contained" component="label">
            Selecione a Imagem
            <input type="file" accept="image/*" hidden {...register("foto")} />
          </Button>
        </Box>

        {/* Botões */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            sx={{ mr: 1 }}
            variant="outlined"
            onClick={() => navigate("/produtos")}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              toast.success("Produto cadastrado com sucesso");
              navigate("/produtos");
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProdutoForm;
