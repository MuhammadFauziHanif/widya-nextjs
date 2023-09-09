const API_BASE_URL = "https://widyaknowledgetest.up.railway.app";

export async function getUserProfile() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
