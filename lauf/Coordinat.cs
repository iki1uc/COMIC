using System;
using System.Collections.Generic;

namespace Industrie6
{
    public class Coordinat
    {
        public int Breite { get; }
        public int Hoehe { get; }
        public int Tiefe { get; }
        public int Trans { get; }

        // Neue mathematische Achsen
        public double Syn { get; }
        public double Quant { get; }
        public double Sprung { get; }
        public double Raumwert { get; }

        public Coordinat(int v)
        {
            Breite = v * 3;
            Hoehe = v * 9;
            Tiefe = v * 27;
            Trans = v * 81;

            // Syn-Achse
            Syn = (Breite + Hoehe + Tiefe + Trans) / 4.0;

            // Quant-Achse
            Quant = Breite * Tiefe;

            // Sprung-Achse
            Sprung = Quant + Hoehe;

            // Raumwert
            Raumwert = Syn + Quant + Sprung;
        }
    }
}
