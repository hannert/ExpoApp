import Draggable from "react-native-draggable";

function person(props){

    const [name, setName] = useState("NULL");

    useEffect(() => {
        setName = name;
    }, [name])

    return(<Draggable renderText={name}/>
    
    )
}

export default person