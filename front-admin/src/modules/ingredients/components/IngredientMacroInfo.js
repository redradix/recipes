import React from 'react'
import withCollapse from '../../hocs/withCollapse'
import { IngredientNutrient } from './IngredientNutrient'

class IngredientMacroInfoRaw extends React.Component{    
    render(){
        const { macroInfo } = this.props
        const macroNames = Object.keys(macroInfo)
        return (
            <div>
                {macroNames.map(el => <IngredientNutrient key={el}  cat={'general'} subCat={'macro'} subCatName={el} label={el} value={macroInfo[el].value} unit={macroInfo[el].unit}/>)}
            </div>
        )
    }
}

export const IngredientMacroInfo = withCollapse(IngredientMacroInfoRaw)

IngredientMacroInfo.displayName = 'IngredientMacroInfo'