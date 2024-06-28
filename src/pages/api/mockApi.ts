import axios from 'axios'

const MOCK_API_URL = 'https://run.mocky.io/v3/2fe94a95-b70a-4566-a79d-bd9c8c22b75e'

export const mockApi = async () => {
  const response = await axios.get('${MOCK_API_URL}')
  return response.data
}
