import styles from './WelcomePage.module.css';
import Background from '../../assets/back1.png';
import picture1 from '../../assets/welcomePage1.png';
import picture2 from '../../assets/welcomePage2.png';
import picture3 from '../../assets/welcomePage3.png';
import Button from "../../Components/Button/button";
import { PATHS } from '../../utils/consts';

const WelcomePage = () => {

    return(
  <div className={styles.WelcomePage} style={{
    backgroundImage: `url(${ Background })`, 
    height: "100%", width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}}>
    <div style={{marginLeft:"80px", marginRight:"80px"}}>
      <h1 style={{}}>Witaj!</h1>
      <div style={{display: "grid"}}>
        <div style={{
        width: "500px",
        height: "0",
        borderStyle: "solid",
        borderWidth: "100px 1000px 100px 0",
        borderColor: "transparent #b2ffa3 transparent transparent",
        marginLeft: "auto", 
        gridColumn: "1", gridRow: "1"}}>
        </div>
        <h2 style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "10px", paddingRight: "5px"}}>Kim jesteśmy?</h2>
        <p style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "70px", paddingRight: "5px"}}>Jesteśmy studentami Wydziału Informatyki Politechniki Białostockiej.</p>
        <div style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "130px", paddingRight: "5px", }}><img style={{height: "50px"}} src={picture1} alt="not found"/></div>
      </div>
      <div style={{display: "grid"}}>
        <div style={{
        width: "500px",
        height: 0,
        borderStyle: "solid",
        borderWidth: "100px 0 100px 1000px",
        borderColor: "transparent transparent transparent #b2ffa3",
        gridColumn: "1", gridRow: "1"}}>
        </div>
        <h2 style={{textAlign: "left", gridColumn: "1", gridRow: "1", paddingTop: "10px", paddingLeft: "5px"}}>Co robimy?</h2>
        <p style={{textAlign: "left", gridColumn: "1", gridRow: "1", paddingTop: "60px", width: "300px", paddingLeft: "5px"}}>Pracujemy nad projektem który pomoże znaleźć pracę dla ludzi zgodną z ich potrzebami</p>
        <img style={{alignSelf: 'left', gridColumn: "1", gridRow: "1", paddingTop: "130px", paddingLeft: "5px", height: "50px"}} src={picture2} alt="not found"/>
        </div>
      <div style={{display: "grid"}}>
        <div style={{
        width: "500px",
        height: "0",
        borderStyle: "solid",
        borderWidth: "100px 1000px 100px 0",
        borderColor: "transparent #b2ffa3 transparent transparent",
        marginLeft: "auto", 
        gridColumn: "1", gridRow: "1"
        }}>
        </div>
        <h2 style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "10px", paddingRight: "5px"}}>W jaki sposób pracujemy?</h2>
        <p style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "70px", paddingRight: "5px"}}>Pracujemy w dwóch zespołach - backendowym oraz frontendowym, w każdym z nich jest około 4-6 osób</p>
        <div style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "130px", paddingRight: "5px", }}><img style={{height: "50px"}} src={picture3} alt="not found"/></div>
      </div>
    </div>
    <Button link={PATHS.home} text="Dołącz do nas!"/>
  </div>
  
);
      }
export default WelcomePage;
