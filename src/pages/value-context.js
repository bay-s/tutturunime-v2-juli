const { createContext, useState, useEffect } = require("react");

export const ValueContext = createContext()

const ValueProvider = ({siteInfo,children}) => {
 
  const value = {
    menus:siteInfo ,
    header:'siteInfo.menu.getHeader',
    footer:'siteInfo.menu.getFooter',
    genre:siteInfo?.genre
    }
 
    return(
        <ValueContext.Provider value={value}>
             {children}
        </ValueContext.Provider>
    )
}

export default  ValueProvider