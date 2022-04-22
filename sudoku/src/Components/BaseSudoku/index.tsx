import GrupoBlocos from "./GrupoBlocos"

function BaseSudoku(){
    return(
        <table>
        <tr>
          <th>
            <GrupoBlocos/>
          </th>
          <th>
            <GrupoBlocos/>
          </th>
          <th>
            <GrupoBlocos/>
          </th>
        </tr>
        <tr>
          <th>
            <GrupoBlocos/>
          </th>
          <th>
            <GrupoBlocos/>
          </th>
          <th>
            <GrupoBlocos/>
          </th>
        </tr>
        <tr>
          <th>
            <GrupoBlocos/>
          </th>
          <th>
            <GrupoBlocos/>
          </th>
          <th>
            <GrupoBlocos/>
          </th>
        </tr>
      </table>
    )
}

export default BaseSudoku