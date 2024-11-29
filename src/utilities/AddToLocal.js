import { toast } from "react-toastify";

const getStoredCartItem= ()=>{
  //cart-list-id
  const storedListStr = localStorage.getItem('cart-list-id');
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
const getStoredItemPrice=()=>{
  const storedListStr = localStorage.getItem('cart-list-price');
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
const addToStoredCartItem= (id, price,availability)=>{
  const storedList =getStoredCartItem();
  const storedListPrice =getStoredItemPrice();
  if(!availability){
    alert("this is not available");
  }
  else{

    if(storedList.includes(id)){
      // do not add 
      console.log(id,"already exists");
    }
    else{
      // add it
      storedList.push(id);
      storedListPrice.push(price);
      const storedListStr=JSON.stringify(storedList);
    const storedListPriceStr=JSON.stringify(storedListPrice);
    localStorage.setItem('cart-list-id',storedListStr)
    localStorage.setItem('cart-list-price',storedListPriceStr)
    toast("Successfully Added it to the cart!!!")
  }
  } 
}

const getStoredWishListItem= ()=>{
  //cart-list-id
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
    toast("Successfully Added it to the Wishlist!!!")
  }
}
export {addToStoredWishListItem , getStoredWishListItem , addToStoredCartItem, getStoredCartItem , getStoredItemPrice};