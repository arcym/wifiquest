var Thing = require("<scripts>/components/Thing")

var ThingStore = Reflux.createStore({
    data: (
        <div className="all-things">
            <Thing
                x={-1} y={-2} z={7}
                width={WIDTH*5} height={HEIGHT}
                image={"./assets/images/background.svg"}/>
            <Thing
                x={-1} y={7} z={1}
                width={WIDTH*6} height={HEIGHT}
                image={"./assets/images/ground.svg"}/>

            <Thing color="red"
                x={WIDTH*1.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                <div>
                    Hello! I am a <b style={{color: "red"}}>red</b> box!
                </div>
            </Thing>
            <Thing color="green"
                x={WIDTH*2.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                <div>
                    Hiya! I am a <b style={{color: "green"}}>green</b> box!
                </div>
            </Thing>
            <Thing color="blue"
                x={WIDTH*3.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                <div>
                    Whatsup? I am a <b style={{color: "blue"}}>blue</b> box!
                    Are you looking for the black box?
                </div>
            </Thing>
            <Thing color="black"
                x={WIDTH*4.5-1.5} y={HEIGHT-8.5} z={1}
                width={4} height={5}>
                <div condition="has_talked_to_black">
                    ...Do not bother me.
                </div>
                <div trigger="has_talked_to_black">
                    ...
                </div>
            </Thing>
        </div>
    ),
    getData: function() {
        return this.data
    }
})

module.exports = ThingStore
