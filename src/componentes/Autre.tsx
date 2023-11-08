export const Autre=()=>{
    return(
    <div className="container2">
        <h1 className="title1">Autres</h1>
        <div>
          <label htmlFor="name">Vos compétences techniques :</label><br />
          <textarea id="tec"
            placeholder="Tapez votre objectif professionel"
            rows={7}
            cols={40}
            required>
          </textarea>
          <br /><br />
          <label htmlFor="name">Vos compétences linguistiques :</label><br />
          <textarea
            id="langue"
            placeholder="Tapez vos compétences linguistiques"
            rows={7}
            cols={40}
            required>
          </textarea><br /><br />
          <label htmlFor="name">Loisirs :</label><br />
          <textarea
            id="loisirs"
            placeholder="Loisirs"
            rows={7}
            cols={40}
            required>
          </textarea>
        </div>
      </div>
    )
}