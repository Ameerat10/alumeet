import React, { useContext, useEffect, useState } from 'react';
import OpportunityCard from '../components/OpportunityCard';
import { useNavigate } from 'react-router-dom';
import { getAllOpportunities } from '../services/apis';
import { SmallLoader } from '../components/Loaders';
import AppContext from '../AppContext';

function Opportunities(props) {

    const {user, setPageTitle} = useContext(AppContext);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [opportunities, setOpportunities] = useState([]);

    useEffect(()=>{
        setPageTitle("Opportunities")
        const getOpportunities = async()=>{
            try {
                setLoading(true);
                const response = await getAllOpportunities();
                if(response.opportunities){
                    console.log(response.opportunities)
                    setOpportunities(response.opportunities)
                }  
                
            } catch (error) {
                console.log(error)                
            }
            finally{
                setLoading(false)
            }

        }

        getOpportunities();
    }, [])

    
    return (
        <div className='app__padding opportunities__page flex flex-col gap-5'>
            <section>
                <div className='flex justify-between action__title'>
                    <h3 className="app__section__title">Opportunities</h3>
                    <div>
                        <button onClick={()=>navigate("/opportunities/create")} className="main__btn btn__yellow">Add Opportunity</button>
                    </div>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                Unlock a world of possibilities on Alumeet's Opportunities Page. Discover a myriad of avenues for personal and professional growth, where exciting opportunities await. From career advancements to community engagement, seize the chance to elevate your journey and make a lasting impact. Your next opportunity is just a click away – explore, connect, and thrive with Alumeet.
                </p>

                {
                    loading?
                    <div className='full-center w-1/2 py-5'>
                        <SmallLoader/>
                    </div>
                    :
                    <div className='flex flex-wrap gap-3 opps__list '>
                        {opportunities.map((opportunity, i)=>(
                            <div key={i} className='w-1/5'>
                                <OpportunityCard key={i} opportunity={opportunity}/>
                            </div>
                        ))}
                    </div>

                }
            </section>
        </div>
    );
}

export default Opportunities;