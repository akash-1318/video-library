const viewsConvertor = (num) => {
    const number = num.replaceAll(',','')
    if(number > 999 && number < 1000000){
        return (number/1000).toFixed(1) + 'K';  
    }else if(number > 1000000){
        return (number/1000000).toFixed(1) + 'M'; 
    }else if(number < 900){
        return number; 
    }
};

export {viewsConvertor}