import React from 'react'
import Card from 'react-bootstrap/Card';
import DisplayItems from '../Data'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


const Career = () => {
  return (
    <div>
      
      <div className='container'>
        <div className="row products-row">
        {DisplayItems.filter((item)=>item.name=="career").map((item, index) => {
                return(
                  <div className="col-lg-4">
                    
                  
                   <div  key={item.id}>
                   <Card style={{ width: '34rem' }}>
                      <Card.Img variant="top" src={item.image} style={{ height: '20rem' }}/>
                      <Card.Body>
                      <Card.Title><h2><strong>{item.title}</strong></h2></Card.Title>
                      <Card.Text>
                        {item.content}
                      </Card.Text>
                      <Link to={`/Data/${DisplayItems.id}`} id='readmore'>READ MORE &raquo;</Link>
                       </Card.Body>
                       <Card.Footer id='footer'>
                           <span className='year'>
                           {(/\d{4}/.exec(Date())[0])}
                           </span>
                           <span>. No Comments</span>
                       </Card.Footer>
                   </Card>
               </div>
               </div>

                    
                 )
             })
             
            }
            
        </div>
    </div>
    </div>
   
  )
}

 

export default Career