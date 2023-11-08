export const Formation=()=>{
    return(
    <div className="container1">
        <h1 className="title1">Formation et diplôme</h1>
        <div>
          <label htmlFor="dip" id=" dip"> Diplôme obtenu :</label>
          <div>
            <label className="checkbox-label"
              ><input type="checkbox" name="diplo" id="diplo" />License</label>
            <label className="checkbox-label"
              ><input type="checkbox" name="diplo" id="diplo" />Master</label>
            <label className="checkbox-label"
              ><input type="checkbox" name="diplo" id="diplo" />Doctorat
            </label>
            <label className="checkbox-label"
              ><input
                type="checkbox"
                name="diplo"
                id="diplo"
              />Ingénierie</label><br />
            <label className="checkbox-label"
              ><input type="checkbox" name="diplo" id="diplo" />DUT
            </label>
            <label className="checkbox-label"
              ><input type="checkbox" name="diplo" id="diplo" />DEUG
            </label>
            <label className="checkbox-label"
              ><input type="checkbox" name="diplo" id="diplo" />BTS</label>
          </div>
          <br />

          <div>
            <label htmlFor="name">Description du diplômes obtenus:</label><br />
            <textarea
              id="Desp"
              cols={40}
              rows={9}
              placeholder="Tapez une Description"
              required
            >
            </textarea>
          </div>
        </div>
      </div>

    )
}