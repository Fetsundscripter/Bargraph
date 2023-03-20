function App() {

    const [countryData, setCountryData] = React.useState([]);
    React.useEffect(() =>{
        async function fetchData(){
           const response = await fetch("https://disease.sh/v3/covid-19/countries");
           const data = await response.json()
           console.log(data);
           setCountryData(data);
        }
        fetchData();
    }, [])


    return (
        <div>
            <h1>Hello world</h1>
            </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));