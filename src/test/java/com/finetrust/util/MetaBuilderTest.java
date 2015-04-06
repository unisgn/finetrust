package com.finetrust.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.testng.annotations.Test;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by 0xFranCiS on Apr 05, 2015.
 */
public class MetaBuilderTest {

    @Test
    public void testMessage() throws Exception {
        Map map = new HashMap();
        map.put("success", true);
        MetaBuilder meta = new MetaBuilder().success(true).data(map);
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(System.out, meta);
    }
}