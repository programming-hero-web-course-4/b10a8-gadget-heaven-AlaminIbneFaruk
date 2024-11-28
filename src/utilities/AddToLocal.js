const getStoredCartItem= ()=>{
  //read-list
  const storedListStr = localStorage.getItem('read-list');
  if(storedListStr){
    // string ke json a poriborton const storedListJSON= JSON.parse(storedlistStr)
    const storedListJSON= JSON.parse(storedListStr);
    console.log('stored List exists');
    return storedListJSON;
  }
  else{
    console.log('stored List does not exists');
    return [];
  }

}
const addToStoredCartItem= (id)=>{
  const storedList =getStoredCartItem();
  if(storedList.includes(id)){
    // do not add 
    console.log(id,"already exists");
  }
  else{
    // add it
    storedList.push(id);
    const storedListStr=JSON.stringify(storedList);
    localStorage.setItem('read-list',storedListStr)
  }
}

const getStoredWishListItem= ()=>{
  //read-list
  const storedListStr = localStorage.getItem('wish-list');
  if(storedListStr){
    // string ke json a poriborton const storedListJSON= JSON.parse(storedlistStr)
    const storedListJSON= JSON.parse(storedListStr);
    console.log('stored List exists');
    return storedListJSON;
  }
  else{
    console.log('stored List does not exists');
    return [];
  }

}
const addToStoredWishListItem= (id)=>{
  const storedList =getStoredWishListItem();
  if(storedList.includes(id)){
    // do not add 
    console.log(id,"already exists");
  }
  else{
    // add it
    storedList.push(id);
    const storedListStr=JSON.stringify(storedList);
    localStorage.setItem('wish-list',storedListStr)
  }
}
export {addToStoredWishListItem , getStoredWishListItem , addToStoredCartItem, getStoredCartItem};