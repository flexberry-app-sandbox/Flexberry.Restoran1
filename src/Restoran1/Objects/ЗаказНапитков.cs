﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Restoran1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ напитков.
    /// </summary>
    // *** Start programmer edit section *** (ЗаказНапитков CustomAttributes)

    // *** End programmer edit section *** (ЗаказНапитков CustomAttributes)
    [AutoAltered()]
    [Caption("Заказ напитков")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказНапитковE", new string[] {
            "Комментраий as \'Комментраий\'",
            "Напитки as \'Напитки\'",
            "Напитки.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Напитки.Наименование"})]
    [MasterViewDefineAttribute("ЗаказНапитковE", "Напитки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ЗаказНапитков : ICSSoft.STORMNET.DataObject
    {
        
        private string fКомментраий;
        
        private IIS.Restoran1.Напитки fНапитки;
        
        private IIS.Restoran1.Бронь fБронь;
        
        // *** Start programmer edit section *** (ЗаказНапитков CustomMembers)

        // *** End programmer edit section *** (ЗаказНапитков CustomMembers)

        
        /// <summary>
        /// Комментраий.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказНапитков.Комментраий CustomAttributes)

        // *** End programmer edit section *** (ЗаказНапитков.Комментраий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментраий
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Комментраий Get start)

                // *** End programmer edit section *** (ЗаказНапитков.Комментраий Get start)
                string result = this.fКомментраий;
                // *** Start programmer edit section *** (ЗаказНапитков.Комментраий Get end)

                // *** End programmer edit section *** (ЗаказНапитков.Комментраий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Комментраий Set start)

                // *** End programmer edit section *** (ЗаказНапитков.Комментраий Set start)
                this.fКомментраий = value;
                // *** Start programmer edit section *** (ЗаказНапитков.Комментраий Set end)

                // *** End programmer edit section *** (ЗаказНапитков.Комментраий Set end)
            }
        }
        
        /// <summary>
        /// Заказ напитков.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказНапитков.Напитки CustomAttributes)

        // *** End programmer edit section *** (ЗаказНапитков.Напитки CustomAttributes)
        [PropertyStorage(new string[] {
                "Напитки"})]
        [NotNull()]
        public virtual IIS.Restoran1.Напитки Напитки
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Get start)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Get start)
                IIS.Restoran1.Напитки result = this.fНапитки;
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Get end)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Set start)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Set start)
                this.fНапитки = value;
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Set end)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Restoran1.Бронь.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказНапитков.Бронь CustomAttributes)

        // *** End programmer edit section *** (ЗаказНапитков.Бронь CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Бронь"})]
        public virtual IIS.Restoran1.Бронь Бронь
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Бронь Get start)

                // *** End programmer edit section *** (ЗаказНапитков.Бронь Get start)
                IIS.Restoran1.Бронь result = this.fБронь;
                // *** Start programmer edit section *** (ЗаказНапитков.Бронь Get end)

                // *** End programmer edit section *** (ЗаказНапитков.Бронь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Бронь Set start)

                // *** End programmer edit section *** (ЗаказНапитков.Бронь Set start)
                this.fБронь = value;
                // *** Start programmer edit section *** (ЗаказНапитков.Бронь Set end)

                // *** End programmer edit section *** (ЗаказНапитков.Бронь Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказНапитковE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказНапитковE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказНапитковE", typeof(IIS.Restoran1.ЗаказНапитков));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ЗаказНапитков.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЗаказНапитков CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЗаказНапитков CustomAttributes)
    public class DetailArrayOfЗаказНапитков : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Restoran1.DetailArrayOfЗаказНапитков members)

        // *** End programmer edit section *** (IIS.Restoran1.DetailArrayOfЗаказНапитков members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ЗаказНапитков by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ЗаказНапитков.
        /// </summary>
        public DetailArrayOfЗаказНапитков(IIS.Restoran1.Бронь fБронь) : 
                base(typeof(ЗаказНапитков), ((ICSSoft.STORMNET.DataObject)(fБронь)))
        {
        }
        
        public IIS.Restoran1.ЗаказНапитков this[int index]
        {
            get
            {
                return ((IIS.Restoran1.ЗаказНапитков)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Restoran1.ЗаказНапитков dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
