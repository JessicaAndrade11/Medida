namespace Medidas.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class nome : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "UserNome", c => c.String());
            DropColumn("dbo.AspNetUsers", "Hometown");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "Hometown", c => c.String());
            DropColumn("dbo.AspNetUsers", "UserNome");
        }
    }
}
