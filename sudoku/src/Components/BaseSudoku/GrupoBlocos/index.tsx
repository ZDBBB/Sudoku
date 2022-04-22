import Bloco from "./Bloco"

function GrupoBlocos(){
    return(
      <div className="outer-grid">
        <div className="outer-square">
          <div className="inner-grid">
            <Bloco/>
          </div>
          <div className="inner-grid">
            <Bloco/>
          </div>
          <div className="inner-grid">
            <Bloco/>
          </div>
        </div>
        <div className="outer-square">
          <div className="inner-grid">
            <Bloco/>
          </div>
          <div className="inner-grid">
            <Bloco/>
          </div>
          <div className="inner-grid">
            <Bloco/>
          </div>
        </div>
        <div className="outer-square">
          <div className="inner-grid">
            <Bloco/>
          </div>
          <div className="inner-grid">
            <Bloco/>
          </div>
          <div className="inner-grid">
            <Bloco/>
          </div>
        </div>
      </div>
    )
}

export default GrupoBlocos