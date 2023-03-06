/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 *
 * @version 3.0.0
 * @author Sayyed Azhar
 * @license MIT
 *
 */

class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  }

  // Make an HTTP GET Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

    return resData;
  }

  // Make an HTTP GET Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

    return resData;
  }

  // Make an HTTP GET Request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await "Resource Deleted...";

    return data;
  }
} //easyHTTP class end
