module.exports = (sequelize, DataTypes)=>{
    const Projects = sequelize.define("Projects",{
        ProjectID: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        
    })
    
    return Projects
}