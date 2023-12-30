
// TODO : abstract base url based on env

// TODO : need JWT ( or equivalent ) api authentication for deployed app of course. 

export const fetchAll = async () => {

  try {
    
    const resp = await fetch(`http://127.0.01:3000/data`, { // TODO : use react-query similar?? better for large scale apps 
      method: 'GET',
      mode: 'no-cors',
    });

    return resp.body

  } catch (e) {
    console.log({e}) // TODO : not for prod, need to handle fe errors gracefully
  }
}
