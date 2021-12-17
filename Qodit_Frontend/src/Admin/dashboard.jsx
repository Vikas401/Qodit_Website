import * as React from "react";
import AdminMain from "./AdminMain";
import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../app/UserAuth";
import { Redirect, useHistory } from "react-router";

const Dashboard = (params) => {
    const [showServices , setShowServices] = useState(null);
    const [navBar , setNavBar] = useState(null);
    const [heroBox , setheroBox] = useState(null);
    const [dataFeatures , setDataFeatures] = useState(null);
    const [aboutUs , setAboutUs] = useState(null);
    const [testimonials , setTestimonials] = useState(null);
    const [team , setTeam] = useState(null);
    // const [contactUs , setContactUs] = useState(null);
    const [chooseus , setChooseus] = useState(null);
    const [selectedMenuItemId, setselectedMenuItemId] = useState(null);
    const [selectedMenuItemName, setselectedMenuItemName] = useState(null);
    const [currentDeleteListId, setCurrentDeleteListId] = useState(null);
    const API = 'https://qoditdev.herokuapp.com' ;
    const user = useSelector(selectUser);
    const history = useHistory();

useEffect(()=>{
  async function getDataFromServer(){ 
    const {data:navBar} = await axios.get(`${API}/navbar/`);
    const {data:heroBox} = await axios.get(`${API}/herobox/`);
    const {data:dataFeatures} = await axios.get(`${API}/features/`);
    const {data:AboutUs} = await axios.get(`${API}/aboutus/`);
    const {data:showservicess} = await axios.get(`${API}/services/`);
    const {data:testimonials} = await axios.get(`${API}/testimonial/`);
    // const {data:team} = await axios.get(`${API}/team/`);
    // const {data:contactus} = await axios.get(`${API}/contactus/`);
    const {data:chooseus} = await axios.get(`${API}/whychooseus/`);
    setNavBar(navBar)
    setheroBox(heroBox)
    setDataFeatures(dataFeatures)
    setAboutUs(AboutUs)
    setShowServices(showservicess)
    setTestimonials(testimonials)
    setChooseus(chooseus)
  }
getDataFromServer();
},[])

const addNewData = (title,body,alt,name) => {
   const data = {
     title:title,
     body:body,
     alt:alt,
   }
  setselectedMenuItemName(name)
  axios.post(`${API}/${name}/`,data).then((res)=> console.log(res));
}
const deleteFunction = (selectedId) => {
  if(selectedId){
  setselectedMenuItemId(selectedId)
  axios.delete(`${API}/${selectedMenuItemName}/${selectedId}`).then((res)=> console.log(res));}
}

if(user){
    return(
        <AdminMain
        showServices={showServices}
        navBar={navBar}
        heroBox={heroBox}
        dataFeatures={dataFeatures}
        aboutUs={aboutUs}
        testimonials={testimonials}
        chooseus={chooseus}
        addNewData={addNewData}
        deleteFunction={deleteFunction}
        setselectedMenuItemName={setselectedMenuItemName}
        setCurrentDeleteListId={setCurrentDeleteListId}
        />
    )}
    else {
      <Redirect to='/admin'/>
    }
}
export default Dashboard;

