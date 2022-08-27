import React from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from "react-router-dom";


const Breadcrumb = (props) => {
    const data = props.breadcrumbData;
  return (
    <div>
         <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              to="/accueil"
              className="hover:underline hover:underline-offset-1"
            >
              Accueil
            </Link>
           {
                data.map((elt, index)=> {
                    return(
                        <Link to = {elt.href} 
                        key={index}
                            style={elt.href === "none" ?{pointerEvents: 'none'}: {}} 
                            className={`${elt.href !== "none" ? 'hover:underline hover:underline-offset-1' : 'text-slate-900 font-bold'}`}>
                                {elt.name}
                        </Link>
                    )
                })
           }
          </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb