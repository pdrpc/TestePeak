using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace TestePeak.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultaController : ControllerBase
    {
        [HttpGet]
        public String Consulta(int indice)
        {
            var resposta = "";
            var lista = new List<KeyValuePair<int, string>>();
            lista.Add(new KeyValuePair<int, string>(1, "João"));
            lista.Add(new KeyValuePair<int, string>(2, "Maria"));
            lista.Add(new KeyValuePair<int, string>(3, "Ana"));

            if (indice <= lista.Count)
            {
                resposta = lista[indice - 1].Value;
            }
            else
            {
                resposta = "Não há nomes cadastrados para o indice fornecido!";
            }

            var json = JsonConvert.SerializeObject(resposta);

            return json;
        }
    }
}
