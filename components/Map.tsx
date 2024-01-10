import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/images/marker-icon.png"})

const expo:[number, number][] = [
    [49.285863, -123.112444], //Waterfront
    [49.285555, -123.120186], //Burrard
    [49.283256, -123.116143], //Granville
    [49.279463, -123.109493], //Stadium-Chinatown
    [49.273180, -123.100458], //Main Street Science World
    [49.261891, -123.069114], //Commercial-Broadway
    [49.248380, -123.056014], //Nanaimo
    [49.244216, -123.045913], //29th Avenue
    [49.238350, -123.031585], //Joyce-Collingwood
    [49.229778, -123.012689], //Patterson
    [49.225827, -123.003851], //Metrotown
    [49.220119, -122.988498], //Royal Oak
    [49.212084, -122.959187], //Edmonds
    [49.200061, -122.949046], //22nd Street
    [49.201293, -122.912924], //New Westminister
    [49.204788, -122.906267], //Columbia

    [49.204446, -122.874155], //Scott Road
    [49.198929, -122.850611], //Gateway
    [49.189419, -122.847860], //Surrey Central
    [49.182753, -122.844602], //King George
]

const millennium:[number, number][] = [
    [49.285783, -123.112444], //Waterfront
    [49.285465, -123.120186], //Burrard
    [49.283166, -123.116143], //Granville
    [49.279373, -123.109493], //Stadium-Chinatown
    [49.273090, -123.100458], //Main Street Science World
    [49.261801, -123.069114], //Commercial-Broadway
    [49.248290, -123.056014], //Nanaimo
    [49.244126, -123.045913], //29th Avenue
    [49.238260, -123.031585], //Joyce-Collingwood
    [49.229688, -123.012689], //Patterson
    [49.225737, -123.003851], //Metrotown
    [49.220029, -122.988498], //Royal Oak
    [49.211984, -122.959187], //Edmonds
    [49.199961, -122.949046], //22nd Street
    [49.201203, -122.912924], //New Westminister
    [49.204698, -122.906267], //Columbia

    [49.224638, -122.889389], //Sapperton
    [49.232892, -122.882718], //Braid
    [49.248386, -122.896667], //Lougheed Town Centre
    [49.253345, -122.918188], //Production Way-University
    [49.254661, -122.939261], //Lake City Way
    [49.259101, -122.964075], //Sperling-Burnaby Lake
    [49.264562, -122.981919], //Holdom
    [49.266368, -123.001768], //Brentwood Town Centre
    [49.264856, -123.013338], //Gilmore
    [49.260585, -123.032926], //Rupert
    [49.258849, -123.045327], //Refrew
    [49.262896, -123.068435], //Commercial-Broadway
    [49.265752, -123.079058], //VCC-Clark
]

const blueOptions = { color : 'blue'}
const brownOptions = { color : 'brown'}

const center:[number, number] = [49.25299, -123.00600];

const Map = () => {
    return(
        <MapContainer
            style={{height:"100vh"}}
            center={[49.24966, -123.00934]} zoom={12} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/farbodtandas/a01059916_tandas_exercise_1">By Farbod Tandas</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.285823, -123.112444]} icon={icon}>
                <Popup>Waterfront</Popup>
            </Marker>
            <Marker position={[49.285515, -123.120186]} icon={icon}>
                <Popup>Burrard</Popup>
            </Marker>
            <Marker position={[49.283216, -123.116143]} icon={icon}>
                <Popup>Granville</Popup>
            </Marker>
            <Marker position={[49.279423, -123.109493]} icon={icon}>
                <Popup>Stadium-Chinatown</Popup>
            </Marker>
            <Marker position={[49.273140, -123.100458]} icon={icon}>
                <Popup>Main Street Science World</Popup>
            </Marker>
            <Marker position={[49.261851, -123.069114]} icon={icon}>
                <Popup>Commercial-Broadway</Popup>
            </Marker>
            <Marker position={[49.248340, -123.056014]} icon={icon}>
                <Popup>Nanaimo</Popup>
            </Marker>
            <Marker position={[49.244176, -123.045913]} icon={icon}>
                <Popup>29th Avenue</Popup>
            </Marker>
            <Marker position={[49.238310, -123.031585]} icon={icon}>
                <Popup>Joyce-Collingwood</Popup>
            </Marker>
            <Marker position={[49.229738, -123.012689]} icon={icon}>
                <Popup>Patterson</Popup>
            </Marker>
            <Marker position={[49.225787, -123.003851]} icon={icon}>
                <Popup>Metrotown</Popup>
            </Marker>
            <Marker position={[49.220079, -122.988498]} icon={icon}>
                <Popup>Royal Oak</Popup>
            </Marker>
            <Marker position={[49.212044, -122.959187]} icon={icon}>
                <Popup>Edmonds</Popup>
            </Marker>
            <Marker position={[49.200021, -122.949046]} icon={icon}>
                <Popup>22nd Street</Popup>
            </Marker>
            <Marker position={[49.201253, -122.912924]} icon={icon}>
                <Popup>New Westminister</Popup>
            </Marker>
            <Marker position={[49.204748, -122.906267]} icon={icon}>
                <Popup>Columbia</Popup>
            </Marker>

            <Marker position={[49.204446, -122.874155]} icon={icon}>
                <Popup>Scott Road</Popup>
            </Marker>
            <Marker position={[49.198929, -122.850611]} icon={icon}>
                <Popup>Gateway</Popup>
            </Marker>
            <Marker position={[49.189419, -122.847860]} icon={icon}>
                <Popup>Surrey Central</Popup>
            </Marker>
            <Marker position={[49.182753, -122.844602]} icon={icon}>
                <Popup>King George</Popup>
            </Marker>

            <Marker position={[49.224638, -122.889389]} icon={icon}>
                <Popup>Sapperton</Popup>
            </Marker>
            <Marker position={[49.232892, -122.882718]} icon={icon}>
                <Popup>Braid</Popup>
            </Marker>
            <Marker position={[49.248386, -122.896667]} icon={icon}>
                <Popup>Lougheed Town Centre</Popup>
            </Marker>
            <Marker position={[49.253345, -122.918188]} icon={icon}>
                <Popup>Production Way-University</Popup>
            </Marker>
            <Marker position={[49.254661, -122.939261]} icon={icon}>
                <Popup>Lake City Way</Popup>
            </Marker>
            <Marker position={[49.259101, -122.964075]} icon={icon}>
                <Popup>Sperling-Burnaby Lake</Popup>
            </Marker>
            <Marker position={[49.264562, -122.981919]} icon={icon}>
                <Popup>Holdom</Popup>
            </Marker>
            <Marker position={[49.266368, -123.001768]} icon={icon}>
                <Popup>Brentwood Town Centre</Popup>
            </Marker>
            <Marker position={[49.264856, -123.013338]} icon={icon}>
                <Popup>Gilmore</Popup>
            </Marker>
            <Marker position={[49.260585, -123.032926]} icon={icon}>
                <Popup>Rupert</Popup>
            </Marker>
            <Marker position={[49.258849, -123.045327]} icon={icon}>
                <Popup>Refrew</Popup>
            </Marker>
            <Marker position={[49.262896, -123.068435]} icon={icon}>
                <Popup>Commercial-Broadway</Popup>
            </Marker>
            <Marker position={[49.265752, -123.079058]} icon={icon}>
                <Popup>VCC-Clark</Popup>
            </Marker>

            <Polyline pathOptions={blueOptions} positions={expo}/>
            <Polyline pathOptions={brownOptions} positions={millennium}/>

        </MapContainer>
    )
}

export default Map;