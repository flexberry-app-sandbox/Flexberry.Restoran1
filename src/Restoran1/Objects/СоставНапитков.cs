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
    /// Состав напитков.
    /// </summary>
    // *** Start programmer edit section *** (СоставНапитков CustomAttributes)

    // *** End programmer edit section *** (СоставНапитков CustomAttributes)
    [AutoAltered()]
    [Caption("Состав напитков")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставНапитковE", new string[] {
            "Количество as \'Количество\'",
            "Единицы as \'Единицы\'",
            "Продукты as \'Продукты\'",
            "Продукты.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Продукты.Наименование"})]
    [MasterViewDefineAttribute("СоставНапитковE", "Продукты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class СоставНапитков : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Restoran1.Единицы fЕдиницы;
        
        private IIS.Restoran1.Продукты fПродукты;
        
        private IIS.Restoran1.Напитки fНапитки;
        
        // *** Start programmer edit section *** (СоставНапитков CustomMembers)

        // *** End programmer edit section *** (СоставНапитков CustomMembers)

        
        /// <summary>
        /// Единицы.
        /// </summary>
        // *** Start programmer edit section *** (СоставНапитков.Единицы CustomAttributes)

        // *** End programmer edit section *** (СоставНапитков.Единицы CustomAttributes)
        public virtual IIS.Restoran1.Единицы Единицы
        {
            get
            {
                // *** Start programmer edit section *** (СоставНапитков.Единицы Get start)

                // *** End programmer edit section *** (СоставНапитков.Единицы Get start)
                IIS.Restoran1.Единицы result = this.fЕдиницы;
                // *** Start programmer edit section *** (СоставНапитков.Единицы Get end)

                // *** End programmer edit section *** (СоставНапитков.Единицы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставНапитков.Единицы Set start)

                // *** End programmer edit section *** (СоставНапитков.Единицы Set start)
                this.fЕдиницы = value;
                // *** Start programmer edit section *** (СоставНапитков.Единицы Set end)

                // *** End programmer edit section *** (СоставНапитков.Единицы Set end)
            }
        }
        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (СоставНапитков.Количество CustomAttributes)

        // *** End programmer edit section *** (СоставНапитков.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (СоставНапитков.Количество Get start)

                // *** End programmer edit section *** (СоставНапитков.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (СоставНапитков.Количество Get end)

                // *** End programmer edit section *** (СоставНапитков.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставНапитков.Количество Set start)

                // *** End programmer edit section *** (СоставНапитков.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (СоставНапитков.Количество Set end)

                // *** End programmer edit section *** (СоставНапитков.Количество Set end)
            }
        }
        
        /// <summary>
        /// Состав напитков.
        /// </summary>
        // *** Start programmer edit section *** (СоставНапитков.Продукты CustomAttributes)

        // *** End programmer edit section *** (СоставНапитков.Продукты CustomAttributes)
        [PropertyStorage(new string[] {
                "Продукты"})]
        [NotNull()]
        public virtual IIS.Restoran1.Продукты Продукты
        {
            get
            {
                // *** Start programmer edit section *** (СоставНапитков.Продукты Get start)

                // *** End programmer edit section *** (СоставНапитков.Продукты Get start)
                IIS.Restoran1.Продукты result = this.fПродукты;
                // *** Start programmer edit section *** (СоставНапитков.Продукты Get end)

                // *** End programmer edit section *** (СоставНапитков.Продукты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставНапитков.Продукты Set start)

                // *** End programmer edit section *** (СоставНапитков.Продукты Set start)
                this.fПродукты = value;
                // *** Start programmer edit section *** (СоставНапитков.Продукты Set end)

                // *** End programmer edit section *** (СоставНапитков.Продукты Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Restoran1.Напитки.
        /// </summary>
        // *** Start programmer edit section *** (СоставНапитков.Напитки CustomAttributes)

        // *** End programmer edit section *** (СоставНапитков.Напитки CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Напитки"})]
        public virtual IIS.Restoran1.Напитки Напитки
        {
            get
            {
                // *** Start programmer edit section *** (СоставНапитков.Напитки Get start)

                // *** End programmer edit section *** (СоставНапитков.Напитки Get start)
                IIS.Restoran1.Напитки result = this.fНапитки;
                // *** Start programmer edit section *** (СоставНапитков.Напитки Get end)

                // *** End programmer edit section *** (СоставНапитков.Напитки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставНапитков.Напитки Set start)

                // *** End programmer edit section *** (СоставНапитков.Напитки Set start)
                this.fНапитки = value;
                // *** Start programmer edit section *** (СоставНапитков.Напитки Set end)

                // *** End programmer edit section *** (СоставНапитков.Напитки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставНапитковE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставНапитковE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставНапитковE", typeof(IIS.Restoran1.СоставНапитков));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СоставНапитков.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСоставНапитков CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСоставНапитков CustomAttributes)
    public class DetailArrayOfСоставНапитков : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Restoran1.DetailArrayOfСоставНапитков members)

        // *** End programmer edit section *** (IIS.Restoran1.DetailArrayOfСоставНапитков members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СоставНапитков by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СоставНапитков.
        /// </summary>
        public DetailArrayOfСоставНапитков(IIS.Restoran1.Напитки fНапитки) : 
                base(typeof(СоставНапитков), ((ICSSoft.STORMNET.DataObject)(fНапитки)))
        {
        }
        
        public IIS.Restoran1.СоставНапитков this[int index]
        {
            get
            {
                return ((IIS.Restoran1.СоставНапитков)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Restoran1.СоставНапитков dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
