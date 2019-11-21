import React from 'react';
import styles from './Projects.module.css';
import Cards from './Cards/Cards';;



 const Projects = () => { 
    

    return (  
        <div className={styles.wrapperProject}>
            <span className={styles.title}><strong>Projects</strong></span>
            <div className={styles.mainWrapper}>                   
                <div className={styles.wrapper}>
                    {/* // project 1 */}                     
                    <Cards                        
                        background={styles.cookIt}                        
                        linkDemo={"https://sarmunbustillo.github.io/CookIt"}
                        description={'Recipe finder......'}
                    >CookIT!
                    </Cards>
                        {/* // project 2 */} 
                    <Cards
                        background={styles.portfolio}
                        linkDemo={"https://sarmunbustillo.github.io/porfolio/"}
                        description={'This Porfolio'}
                    >Portfolio
                    </Cards>
                    {/* // project 3 */}
                    <Cards
                        background={styles.budgetCalculator}                        
                        linkDemo={"https://sarmunbustillo.github.io/budget-calculator/"}
                        description={'Calculate your budget and dynamically see the percentages'}
                    >Budget Calculator
                    </Cards>
              
                    {/* // project 4 */}
                    <Cards cardtitle={styles.react}>React Project #1</Cards>
                    {/* // project 5 */}
                    <Cards cardtitle={styles.react}>React Project #2</Cards>
                    {/* // project 6 */}
                    <Cards cardtitle={styles.react}>React Project #3</Cards>
                </div>
            
            </div>
        </div>      
    );
}

export default Projects;