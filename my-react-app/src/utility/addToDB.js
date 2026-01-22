import { toast } from "react-toastify";

const getStoredApp=()=>{
 const storedAppSTR=localStorage.getItem("installation");
 if(storedAppSTR){
    const storedAppData=JSON.parse(storedAppSTR);
    return storedAppData;
 }
 else{
    return [];
 }
}
const addToStoredDB=(id,{title})=>{
  const storedAppData=getStoredApp();

  if(storedAppData.includes(id)){ 
    alert('i am already exist');
  }
  else{
     toast(`Yahoo!! ${title} Installed  Successfully`)
    storedAppData.push(id);
  const data=JSON.stringify(storedAppData);
  localStorage.setItem("installation",data);
  }

}
const removeStoredDB=(id)=>{
    const storedAppData=getStoredApp();
    const remaining=storedAppData.filter(appId=>parseInt(appId)!==parseInt(id));
    localStorage.setItem("installation", JSON.stringify(remaining));
}
export {addToStoredDB,getStoredApp,removeStoredDB};