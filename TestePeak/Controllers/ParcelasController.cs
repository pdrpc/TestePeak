using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace TestePeak.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParcelasController : ControllerBase
    {
        [HttpPost]
        [Route("Calculo")]
        public String Calculo(int parcelas, decimal valor)
        {
            var resultado = (decimal)(valor * parcelas) + ((decimal)(valor * parcelas) * (decimal)0.05);
            var total = JsonConvert.SerializeObject(resultado);

            return total;
        }
    }
}
