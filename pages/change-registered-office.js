import PopularServices from '../components/Change-Registered-Office/PopularServices.js'
import DocumentsRequired from '../components/Change-Registered-Office/DocumentsRequired.js'
import ServicePackages from '../components/Change-Registered-Office/ServicePackages.js'
import HowWeWork from '../components/Change-Registered-Office/HowWeWork.js'
import WhyUs from '../components/Change-Registered-Office/WhyUs.js'
import FAQ from '../components/Change-Registered-Office/FAQs.js'
import Header from '../components/Change-Registered-Office/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function PrivateCompanyRegistration() {

    const Router = useRouter();
const pathname = Router.pathname;
const serviceName = pathname.substring(1,)
const [data, setData] = useState('');

useEffect(async ()=>{
    try{
    const response = await fetch('/api/get-Price', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
        serviceName
        })
    });
    const data = await response.json();
    setData(data.data)

}catch(err){
    console.log(err)
}
},[])

    return (
        <>
        <TopHeader /> 
        <BottomHeader />
        <HamBurger /> 
         <Header/> 
        <DocumentsRequired/>
        <ServicePackages
         basicPlan={(data.planPrice || {}).basicPlan} megaPlan={(data.planPrice || {}).megaPlan}  smartPlan={(data.planPrice || {}).smartPlan} /> 
        <HowWeWork/>
        <PopularServices/>
        <WhyUs/>
        <FAQ/> 
        <Footer/>
        </>
    )
}

export default PrivateCompanyRegistration;