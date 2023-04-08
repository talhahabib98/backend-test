module.exports = (sequelize, DataTypes)=>{
    const Logs = sequelize.define("Logs",{
        LogID: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },
        route:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        CreatedAt:{
            type: DataTypes.DATE,
            default:  DataTypes.NOW

        }
        
    })
    
    return Logs
}