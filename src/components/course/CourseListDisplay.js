/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';

const defaultImg = "https://www.gcppodcast.com/images/icons/firebase.png"
const defaulUserImg = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/FfKibc1hRnCM5E3HEzfx";

export const CourseListDisplay = ({courses}) => {
    return (
        <div>
            <section className="course-list-container">

                <article className="course-list-card">
                    <img className="portada" src={defaultImg} alt="portada"/>
                    <h5>Estructuración de Bases de datos con Firebase</h5>
                    <p>Crea tu base de datos como todo un profesional, con la estructura correcta y normalizada</p>
                    <div className="course-card-footer">
                        <div>
                            <img src={defaulUserImg} alt="user"/>
                            <span>Héctor BlisS</span>
                        </div>
                        <span>GRATIS</span>
                    </div>

                </article>

                <article className="course-list-card">
                    <img className="portada" src={defaultImg} alt="portada"/>
                    <h5>Estructuración de Bases de datos con Firebase</h5>
                    <p>Crea tu base de datos como todo un profesional, con la estructura correcta y normalizada</p>
                    <div className="course-card-footer">
                        <div>
                            <img src={defaulUserImg} alt="user"/>
                            <span>Héctor BlisS</span>
                        </div>
                        <span>GRATIS</span>
                    </div>

                </article>

                <article className="course-list-card">
                    <img className="portada" src={defaultImg} alt="portada"/>
                    <h5>Estructuración de Bases de datos con Firebase</h5>
                    <p>Crea tu base de datos como todo un profesional, con la estructura correcta y normalizada</p>
                    <div className="course-card-footer">
                        <div>
                            <img src={defaulUserImg} alt="user"/>
                            <span>Héctor BlisS</span>
                        </div>
                        <span>GRATIS</span>
                    </div>

                </article>



            </section>
        </div>
    );
};



