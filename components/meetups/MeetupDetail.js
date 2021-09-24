

import classes from './MeetupDetail.module.css'



function MeetupDetails(props){
    return(
     <section className={classes.detail}>
        <div className={classes.textbox}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address> {props.address} </address>
        <p>{props.description}</p>
        </div>
    </section>
    )
}

export default MeetupDetails;