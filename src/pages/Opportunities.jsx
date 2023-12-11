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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae quibusdam veritatis, error, ab repellat labore illum quo, natus voluptas consectetur in laboriosam? Harum, error amet ducimus reiciendis accusamus dignissimos?
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