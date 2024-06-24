import axios from 'axios'

const MOCK_API_URL = 'https://run.mocky.io/v3/cd07a0d2-981d-4507-84af-3f3f5d4e84ef'

export const mockApi = async () => {
  const response = await axios.get('${MOCK_API_URL}/users')
  return response.data
}
