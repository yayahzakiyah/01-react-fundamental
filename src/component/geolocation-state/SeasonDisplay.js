const getSeason = (mm) => {
    if (mm>2 && mm< 9){
        return "Kemarau"
    } else {
        return "Penghujan"
    }
}

const SeasonConfig = {
    Kemarau: {
        color: 'bg-warning',
        icon: 'sun'
    },
    Hujan: {
        color: 'bg-primary',
        icon: 'umbrella'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(new Date().getMonth());
    const {color, icon} = SeasonConfig[season]
    return(
        <div>
            <h2>Musim</h2>
            <div className={`p-3 mb-2 ${color} text-white`}>
                <div>{icon}</div>
                <div>{season}</div>
            </div>
        </div>
    )
}

export default SeasonDisplay