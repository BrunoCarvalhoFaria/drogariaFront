import api from "../axiosConfig";

export const FaltaGetAll = async () => {
  const route = "/api/Falta";
  await api
    .get(route)
    .then((res) => {
      if (res.status == 200) {
        return {
          data: res.data,
          success: true,
        };
      } else {
        return {
          success: false,
          message: "Falha ao buscar faltas.",
        };
      }
    })
    .catch((e) => {
      return {
        success: false,
        erro: e.message,
      };
    });
};
