import React, {useState} from "react";
import Header from "../components/Header";
import Carousel from "../components/pageAccueil/Carousel";
import CategoriesList from "../components/pageAccueil/CategoriesList";
import BrandsList from "../components/pageAccueil/BrandsList";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const Accueil = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
  
  return (
    <section>
      <div className="sticky top-0 bg-white " style={{zIndex:1000000000000}}>
        <Header />
      </div>

      <main>
        <Carousel />
        <CategoriesList />
        <BrandsList />
        <div className="container mx-auto bg-yellow-400/10 mt-5 h-[150vh] border-2 border-solid border-stale-900"></div> 
        <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
      </main>
    </section>
  );
};





export default Accueil;