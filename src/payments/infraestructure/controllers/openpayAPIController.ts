import axios from 'axios';

// Configura las credenciales de autenticación de OpenPay
const openPayApiKey = 'sk_01d43bdbe6fb42d4be7bea2657ad3d5c'; // Reemplaza con tu clave de API
const openPayMerchantId = 'pk_1be0a5dfafd5458b8863111e2f677f92'; // Reemplaza con tu ID de comerciante
const openPayEndpoint = 'https://sandbox-api.openpay.mx/v1/'; // Reemplaza con la URL de la API de tu región

// Configura Axios para usar las credenciales de autenticación
const axiosInstance = axios.create({
  baseURL: openPayEndpoint,
  auth: {
    username: openPayApiKey,
    password: '',
  },
});

// Realiza una solicitud GET a la API de OpenPay
async function getOpenPayInfo() {
  try {
    const response = await axiosInstance.get('/account');
    console.log('Información de la cuenta de OpenPay:', response.data);
  } catch (error) {
    console.error('Error al obtener información de OpenPay:', error);
  }
}

// Ejecuta la función para obtener información de OpenPay
getOpenPayInfo();
