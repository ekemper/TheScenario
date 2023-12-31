
// TODO : abstract base url based on env
const dataApiUrl = `http://127.0.01:3000/data/`

// TODO : need JWT ( or equivalent ) api authentication for deployed app of course. 

export const fetchAll = async () => {

  try {

    const resp = await fetch(dataApiUrl, { // TODO : use react-query similar?? better for large scale apps 
      method: 'GET',
      // https://stackoverflow.com/questions/54896998/how-to-process-fetch-response-from-an-opaque-type
      mode: 'cors',
    });

    return await resp.json()

  } catch (e) {
    console.log({ e }) // TODO : not for prod, need to handle fe api errors gracefully
  }
}


export const create = async (id: String) => {

  try {

    const resp = await fetch(`${dataApiUrl}${id}`, {
      method: 'POST',
      mode: 'cors',
    });

    return await resp.json()

  } catch (e) {
    console.log({ e })
  }
}

export const deleteById = async (id: String) => {

  try {

    const resp = await fetch(`${dataApiUrl}${id}`, {
      method: 'DELETE',
      mode: 'cors',
    });

    return await resp.json()

  } catch (e) {
    console.log({ e })
  }
}
