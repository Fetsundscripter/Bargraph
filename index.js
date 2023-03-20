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
    function BarChart({data, height, width, widthOfBar, dataType}) {
        React.useEffect(() =>{
            createBarChart();
        }, [])

        const createBarChart = () => {
            const countryData = data.map(country => country['casesPerOneMillion'])
            const countries = data.map(country => country.country);

            const dataMax = d3.max(countryData);
            const yScale = d3.scaleLinear().domain([0, dataMax]).range([0, height])
            d3.select("svg").selectAll("rect").data(countryData).enter().append("rect");
        };

        return {
            <>
            <svg width=(width) height=(height)></svg>
            </>
        };
}

ReactDOM.render(<App/>, document.getElementById('root'));